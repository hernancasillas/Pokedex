import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {
  View,
  TouchableOpacity,
  StatusBar,
  useColorScheme,
  Text,
  SafeAreaView,
} from 'react-native';

import styles from './styles';
import PropTypes from 'prop-types';

export default function Header(props) {
  const {
    style,
    styleLeft,
    styleCenter,
    styleRight,
    styleRightSecond,
    title,
    subTitle,
    onPressLeft,
    onPressRight,
    onPressRightSecond,
    renderLeft,
    renderRightSecond,
    renderRight,
    barStyle,
    titleStyle,
  } = props;

  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    let option = isDarkMode ? 'light-content' : 'dark-content';

    if (barStyle) {
      option = barStyle;
    }
    StatusBar.setBarStyle(option, true);
  }, [barStyle, isDarkMode]);

  return (
    <SafeAreaView style={{width: '100%'}} edges={['top', 'left', 'right']}>
      <View style={[styles.contain, style]}>
        <View style={{flex: 1}}>
          <TouchableOpacity
            style={[styles.contentLeft, styleLeft]}
            onPress={onPressLeft}>
            {renderLeft()}
          </TouchableOpacity>
        </View>
        <View style={[styles.contentCenter, styleCenter]}>
          <Text style={titleStyle} numberOfLines={1}>
            {title}
          </Text>
          {subTitle !== '' && <Text>{subTitle}</Text>}
        </View>
        <View style={styles.right}>
          <TouchableOpacity
            style={[styles.contentRightSecond, styleRightSecond]}
            onPress={onPressRightSecond}>
            {renderRightSecond()}
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.contentRight, styleRight]}
            onPress={onPressRight}>
            {renderRight()}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

Header.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  styleLeft: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  styleCenter: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  styleRight: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  styleRightSecond: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  renderLeft: PropTypes.func,
  renderRight: PropTypes.func,
  renderRightSecond: PropTypes.func,
  onPressRightSecond: PropTypes.func,
  onPressLeft: PropTypes.func,
  onPressRight: PropTypes.func,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  barStyle: PropTypes.string,
};

Header.defaultProps = {
  style: {},
  styleLeft: {},
  styleCenter: {},
  styleRight: {},
  styleRightSecond: {},
  renderLeft: () => {},
  renderRight: () => {},
  renderRightSecond: () => {},
  onPressLeft: () => {},
  onPressRight: () => {},
  onPressRightSecond: () => {},
  title: 'Title',
  subTitle: '',
  barStyle: '',
};
