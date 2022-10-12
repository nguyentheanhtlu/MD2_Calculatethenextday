import {Dates} from "./app";

describe("NextDayCalculator()", () =>{
    let d: Dates = new Dates(1,1,2018);
    let d2:Dates = new Dates(31,1,2018);
    let d3: Dates = new Dates(30,4,2018);
    let d4: Dates = new Dates(28,2,2018);
    it("should return 1/1/2018", () =>{
        expect(d.NextDayCalculator()).toBe('2/1/2018')
    })
    it("should return 31/1/2018", () =>{
        expect(d2.NextDayCalculator()).toBe('1/2/2018')
    })
    it("should return 30/4/2018", () =>{
        expect(d3.NextDayCalculator()).toBe('1/5/2018')
    })
    it("should return 28/2/2018", () =>{
        expect(d4.NextDayCalculator()).toBe('1/3/2018')
    })
})