function timeConversion(s: string): string {
    const hours = s.slice(0, 2);
    const minutes = s.slice(3, 5);
    const seconds = s.slice(6, 8);
    const meridiem = s.slice(8, 10);

    if (meridiem === 'AM' && hours === '12') {
        return `00:${minutes}:${seconds}`;
    }
    if (meridiem === 'PM' && hours !== '12') {
        const militaryHours = Number.parseInt(hours) + 12;
        return `${militaryHours}:${minutes}:${seconds}`;
    }
    return `${hours}:${minutes}:${seconds}`;
}