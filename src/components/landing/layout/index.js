import { cloneElement, Children } from 'react';
import Screen from '../screen';
import HeaderFixed from '../header/fixed';
import Navigation from '../navigation';
import Footer from '../footer';

const LandingLayout = ({ children }) => {
  const components = {
    [Screen.name]: [],
    [HeaderFixed.name]: [],
    [Navigation.name]: [],
    [Footer.name]: []
  };

  const fillElement = ch => {
    if (ch.type) {
      const { name } = ch.type;
      if (Object.keys(components).find(key => key === name)) {
        components[name].push(ch);
      }
    }
  };

  const fillElements = element => {
    if (element.props && element.props.children) {
      const { children } = element.props;
      if (Children.count(children) > 1) {
        Children.forEach(element.props.children, (ch) => {
          fillElement(ch);
          fillElements(ch);
        });
      } else {
        fillElement(children);
        fillElements(children);
      }
    }
  };

  const checkElements = () => {
    if (components[HeaderFixed.name].length > 1) {
      throw Error('FixedHeader can be only one');
    }
    if (components[Footer.name].length > 1) {
      throw Error('Footer can be only one');
    }
  };

  const handlePropsInjecting = element => {
    switch (element.type) {
    case Screen: {
      if (components[HeaderFixed.name].length) {
        return { topOffset: components[HeaderFixed.name][0].props.height };
      }
      break;
    }
    case Navigation: {
      return {
        items: components[Screen.name]
          .map(({ props: { anchor, navTitle } }) => ({ anchor, navTitle }))
      };
    }
    default: {
      return {};
    }
    }
    return {};
  };

  const recursiveClone = element => {
    let newChildren = [];

    if (element.props && element.props.children) {
      const { children } = element.props;

      if (Children.count(children)) {
        newChildren = Children
          .map(children, ch => (typeof ch !== 'string' ? recursiveClone(ch) : ch));
      } else {
        newChildren = [typeof children !== 'string' ? recursiveClone(children) : children];
      }
    }

    return cloneElement(element, handlePropsInjecting(element), newChildren);
  };

  children.forEach(ch => {
    fillElement(ch);
    fillElements(ch);
  });
  checkElements();

  return Children.map(children, ch => recursiveClone(ch));
};

export default LandingLayout;
