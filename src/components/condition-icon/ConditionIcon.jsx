import ClearDay from '@/static/icons/conditions/day/c-1000.svg?react';
import ClearNight from '@/static/icons/conditions/night/c-1000.svg?react';

import PartlyCloudyDay from '@/static/icons/conditions/day/c-1003.svg?react';
import PartlyCloudyNight from '@/static/icons/conditions/night/c-1003.svg?react';

import Overcast from '@/static/icons/conditions/c-1009.svg?react';
import Mist from '@/static/icons/conditions/c-1030.svg?react';

import LightRain from '@/static/icons/conditions/c-1183.svg?react';
import ModerateRain from '@/static/icons/conditions/c-1189.svg?react';
import HeavyRain from '@/static/icons/conditions/c-1195.svg?react';
import FreezingRain from '@/static/icons/conditions/c-1198.svg?react';
import LightSnow from '@/static/icons/conditions/c-1213.svg?react';
import ModerateSnow from '@/static/icons/conditions/c-1219.svg?react';
import HeavySnow from '@/static/icons/conditions/c-1225.svg?react';
import Ice from '@/static/icons/conditions/c-1237.svg?react';
import Blizzard from '@/static/icons/conditions/c-1273.svg?react';

const ConditionIcon = ({ code, time }) => {
  const iconsByCode = {
    1000: {
      day: <ClearDay />,
      night: <ClearNight />,
    },
    1003: {
      day: <PartlyCloudyDay />,
      night: <PartlyCloudyNight />,
    },
    1006: {
      day: <Overcast />,
      night: <Overcast />,
    },
    1009: {
      day: <Overcast />,
      night: <Overcast />,
    },
    1030: {
      day: <Mist />,
      night: <Mist />,
    },
    1063: {
      day: <LightRain />,
      night: <LightRain />,
    },
    1066: {
      day: <LightSnow />,
      night: <LightSnow />,
    },
    1069: {
      day: <LightRain />,
      night: <LightRain />,
    },
    1072: {
      day: <FreezingRain />,
      night: <FreezingRain />,
    },
    1087: {
      day: <Blizzard />,
      night: <Blizzard />,
    },
    1114: {
      day: <HeavySnow />,
      night: <HeavySnow />,
    },
    1117: {
      day: <Blizzard />,
      night: <Blizzard />,
    },
    1135: {
      day: <Mist />,
      night: <Mist />,
    },
    1147: {
      day: <HeavySnow />,
      night: <HeavySnow />,
    },
    1150: {
      day: <LightRain />,
      night: <LightRain />,
    },
    1153: {
      day: <LightRain />,
      night: <LightRain />,
    },
    1168: {
      day: <FreezingRain />,
      night: <FreezingRain />,
    },
    1171: {
      day: <FreezingRain />,
      night: <FreezingRain />,
    },
    1180: {
      day: <LightRain />,
      night: <LightRain />,
    },
    1183: {
      day: <LightRain />,
      night: <LightRain />,
    },
    1186: {
      day: <ModerateRain />,
      night: <ModerateRain />,
    },
    1189: {
      day: <ModerateRain />,
      night: <ModerateRain />,
    },
    1192: {
      day: <HeavyRain />,
      night: <HeavyRain />,
    },
    1195: {
      day: <HeavyRain />,
      night: <HeavyRain />,
    },
    1198: {
      day: <FreezingRain />,
      night: <FreezingRain />,
    },
    1201: {
      day: <FreezingRain />,
      night: <FreezingRain />,
    },
    1204: {
      day: <LightSnow />,
      night: <LightSnow />,
    },
    1207: {
      day: <LightSnow />,
      night: <LightSnow />,
    },
    1210: {
      day: <LightSnow />,
      night: <LightSnow />,
    },
    1213: {
      day: <LightSnow />,
      night: <LightSnow />,
    },
    1216: {
      day: <ModerateSnow />,
      night: <ModerateSnow />,
    },
    1219: {
      day: <ModerateSnow />,
      night: <ModerateSnow />,
    },
    1222: {
      day: <HeavySnow />,
      night: <HeavySnow />,
    },
    1225: {
      day: <HeavySnow />,
      night: <HeavySnow />,
    },
    1237: {
      day: <Ice />,
      night: <Ice />,
    },
    1240: {
      day: <ModerateRain />,
      night: <ModerateRain />,
    },
    1243: {
      day: <HeavyRain />,
      night: <HeavyRain />,
    },
    1246: {
      day: <HeavyRain />,
      night: <HeavyRain />,
    },
    1249: {
      day: <ModerateRain />,
      night: <ModerateRain />,
    },
    1252: {
      day: <HeavyRain />,
      night: <HeavyRain />,
    },
    1255: {
      day: <ModerateSnow />,
      night: <ModerateSnow />,
    },
    1258: {
      day: <ModerateSnow />,
      night: <ModerateSnow />,
    },
    1261: {
      day: <HeavySnow />,
      night: <HeavySnow />,
    },
    1264: {
      day: <HeavySnow />,
      night: <HeavySnow />,
    },
    1273: {
      day: <Blizzard />,
      night: <Blizzard />,
    },
    1276: {
      day: <Blizzard />,
      night: <Blizzard />,
    },
    1279: {
      day: <Blizzard />,
      night: <Blizzard />,
    },
    1282: {
      day: <Blizzard />,
      night: <Blizzard />,
    },
  };

  return iconsByCode[code][time] || iconsByCode[1000].day;
};

export default ConditionIcon;
