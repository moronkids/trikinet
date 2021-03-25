import Moment from "moment";

export default {
  formatDate(date) {
    Moment.locale("en");

    Moment.updateLocale("en", {
      relativeTime: {
        future: "in %s",
        past: "%s lalu",
        s: "detik",
        m: "1 menit",
        mm: "%d menit",
        h: "1 jam",
        hh: "%d jam",
        d: "1 hari",
        dd: "%d hari",
        M: "1 bulan",
        MM: "%d bulan",
        y: "1 tahun",
        yy: "%d tahun",
      },
    });

    var dateNow = Moment().format("YYYY-MM-DD HH:mm:ss");
    var dateFrom = date;

    var a = Moment(dateNow); //now
    var b = Moment(dateFrom);

    var interval = a.diff(b, "days");

    if (interval > 11) {
      var resDate = Moment(date).format("D MMM YYYY");
      var resHour = Moment(date).format("HH:mm");

      return resDate + ", " + resHour + " WIB";
    } else {
      return Moment(date).fromNow();
    }
  },

  removeHtmlTag(str) {
    if (str === null || str === "") {
      return false;
    } else {
      str = str.toString();
    }

    return str.replace(/<[^>]*>/g, "");
  },

  slugify(string) {
    const a = "àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœṕŕßśșțùúüûǘẃẍÿź·/_,:;";
    const b = "aaaaaaaaceeeeghiiiimnnnoooooprssstuuuuuwxyz------";
    const p = new RegExp(a.split("").join("|"), "g");

    return string
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with -
      .replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special characters
      .replace(/&/g, "-and-") // Replace & with 'and'
      .replace(/[^\w\-]+/g, "") // Remove all non-word characters
      .replace(/\-\-+/g, "-") // Replace multiple - with single -
      .replace(/^-+/, "") // Trim - from start of text
      .replace(/-+$/, ""); // Trim - from end of text
  },
};
