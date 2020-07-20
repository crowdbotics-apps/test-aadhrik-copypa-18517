import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen674114Navigator from '../features/BlankScreen674114/navigator';
import BlankScreen774113Navigator from '../features/BlankScreen774113/navigator';
import BlankScreen874112Navigator from '../features/BlankScreen874112/navigator';
import BlankScreen873397Navigator from '../features/BlankScreen873397/navigator';
import BlankScreen673396Navigator from '../features/BlankScreen673396/navigator';
import BlankScreen773395Navigator from '../features/BlankScreen773395/navigator';
import BlankScreen873394Navigator from '../features/BlankScreen873394/navigator';
import BlankScreen773387Navigator from '../features/BlankScreen773387/navigator';
import BlankScreen873386Navigator from '../features/BlankScreen873386/navigator';
import BlankScreen673385Navigator from '../features/BlankScreen673385/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import BlankBlueprintNavigator from '../features/BlankBlueprint/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen674114: { screen: BlankScreen674114Navigator },
BlankScreen774113: { screen: BlankScreen774113Navigator },
BlankScreen874112: { screen: BlankScreen874112Navigator },
BlankScreen873397: { screen: BlankScreen873397Navigator },
BlankScreen673396: { screen: BlankScreen673396Navigator },
BlankScreen773395: { screen: BlankScreen773395Navigator },
BlankScreen873394: { screen: BlankScreen873394Navigator },
BlankScreen773387: { screen: BlankScreen773387Navigator },
BlankScreen873386: { screen: BlankScreen873386Navigator },
BlankScreen673385: { screen: BlankScreen673385Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
BlankBlueprint: { screen: BlankBlueprintNavigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
