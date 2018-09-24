/* Bosnian locals for flatpickr */
var Flatpickr = Flatpickr || { l10ns: {} };
Flatpickr.l10ns.bs = {};

Flatpickr.l10ns.bs.weekdays = {
    shorthand: ['Ned', 'Pon', 'Uto', 'Sri', 'Čet', 'Pet', 'Sub'],
    longhand: ['Nedjelja', 'Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak', 'Subota']
};

Flatpickr.l10ns.bs.months = {
    shorthand: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
    longhand: ['Januar', 'Februar', 'Mart', 'April', 'Maj', 'Juni', 'Juli', 'August', 'Septembar', 'Oktobar', 'Novembar', 'Decembar']
};

Flatpickr.l10ns.bs.firstDayOfWeek = 1;
Flatpickr.l10ns.bs.weekAbbreviation = 'Ned.';
Flatpickr.l10ns.bs.rangeSeparator = ' do ';

if (typeof module !== "undefined") {
    module.exports = Flatpickr.l10ns;
}