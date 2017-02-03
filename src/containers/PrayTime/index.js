import React from 'react'

import {AsyncStorage} from 'react-native'

import PrayTimes from './compute'

/*
    var PT = new PrayTimes('ISNA');
	var times = PT.getTimes(new Date(), [43, -80], -5);
	document.write('Sunrise = '+ times.sunrise)
*/

export default class PrayTime {
    constructor(props){
    }

    computeTime(lat, lng){
        let PT = new PrayTimes('ISNA');
        date = new Date()
        times = PT.getTimes(date, [lat, lng], date.getTimezoneOffset() / 60);
        return times;
    }
}