function makeDate(timestamp: number): Date;
function makeDate(Year: number, month: number, day: number): Date;
function makeDate(timestampOrYear: number, month?: number, day?: number): Date {
    if(month && day) {
        return new Date(timestampOrYear, month - 1, day);
    } else {
        return new Date(timestampOrYear);
    }
}

const doomsday = makeDate(2000, 1, 1); // 1 Jan 2000
const epoch = makeDate(0); // 1 Jun 1970

// const doomsdayError = makeDate(2000, 1); // Error!!


function reverse(string: string): string;
function reverse(stringArray: string[]): string[];
function reverse(stringOrStringArray: string | string[]) {
    if(typeof stringOrStringArray == 'string') {
        return stringOrStringArray.split('').reverse().join('');
    } else {
        return stringOrStringArray.slice().reverse();
    }
}

const hellos = reverse('hello'); // 'olleh'
const h_e_l_l_o = reverse(['h', 'e', 'l', 'l', '0']); // ['o', 'l', 'l', 'e', 'h']