// Moment
import * as moment from 'moment';
import 'moment/locale/pt-br';

moment().locale('pt-br');

export class DateFormatter {
    constructor(date) {
        this.date = moment(date);
    }

    getFullDate() {
        const fullDate = this.date.format("L");
        return fullDate;
    }

    getYear() {
        const year = this.date.format('YYYY');
        return year;
    }

    getMonth() {
        const month = this.date.format('MMMM');
        return month;
    }

    getDay() {
        const day = this.date.format('dddd');
        return day;
    }

    getDayOfMonth() {
        const dayOfMonth = this.date.date();
        return dayOfMonth;
    }

    getHour() {
        const hour = this.date.format("LT");
        return hour;
    }
}

