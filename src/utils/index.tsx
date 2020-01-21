export default {
    urlParse(query:string) {
        if (typeof query !== 'string') {
            return {};
        }
        let abj:any = {},
            reg = /^([^&]*)=([^#&]*)(\/|#|&|$)/,
            matchs = [];
        while (matchs = query.match(reg)) {
            abj[matchs[1]] = decodeURIComponent(matchs[2]);
            query = query.substring(matchs[0].length);
        }
        return abj;
    },
    dateFormat(date:any,format:string){
        if(!date) return "";
        var date:any = new Date(date);

        var map:any = {
            "M": date.getMonth() + 1, //月份
            "d": date.getDate(), //日
            "h": date.getHours(), //小时
            "m": date.getMinutes(), //分
            "s": date.getSeconds(), //秒
            "q": Math.floor((date.getMonth() + 3) / 3), //季度
            "S": date.getMilliseconds() //毫秒
        };
        format =format ||'yyyy-MM-dd';
        let  value = format.replace(/([yMdhmsqS])+/g, function(all, t) {
            var v = map[t];
            if (v !== undefined) {
                if (all.length > 1) {
                    v = '0' + v;
                    v = v.substr(v.length - 2);
                }
                return v;
            } else if (t === 'y') {
                return (date.getFullYear() + '').substr(4 - all.length);
            }
            return all;
        });
        return value;
    }
}
