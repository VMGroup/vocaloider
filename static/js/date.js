$(document).ready(function () {
    moment.lang('zh-cn');
    var dateDomArr = $('.work-date');
    for (var i = 0; i < dateDomArr.length; i++) {
        var dateStr = moment($(dateDomArr[i]).text()).calendar();
        // console.log(dateStr);
        $(dateDomArr[i]).text(dateStr);
    }
});