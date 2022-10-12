export class Dates {
    day: number;
    month: number;
    year: number;
    constructor(day:number, month: number, year: number) {
        this.day = day;
        this.month = month;
        this.year = year
    }

    NextDayCalculator():string{
        let day31= [1,3,5,7,9,10,12];
        let day30= [4,6,8,8,11];
        let div4 = this.year%4;
        let div100 = this.year%100;
        let div400 = this.year%400
        if(this.day == 31 && day31.indexOf(this.month)!= -1){
            if(this.month == 12) {
                return `1/1/${this.year+1}`
            } else {
                return `1/${this.month+1}/${this.year}`
            }
        } else if(this.day == 30 && day30.indexOf(this.month)!=-1){
            return `1/${this.month+1}/${this.year}`;

        } else if (this.month == 2){
            if ((this.day == 29 && div4==0 && div100 !=0) || (this.day==29 && div400 == 0)){
                return `1/3/${this.year}`;
            } else if((this.day == 28 && div4 != 0) || (this.day==28 && div400 != 0)){
                return `1/3/${this.year}`;
            } else {
                return `${this.day+1}/${this.month}/${this.year}`;
            }
        } else {
            return `${this.day+1}/${this.month}/${this.year}`;
        }

    }

}