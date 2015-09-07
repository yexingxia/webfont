var helper = {

    /**
     * 获取url参数，包括数组类型的参数
     * @param  {string} url
     * @return {object} 	参数对象
     */
    getUrlQueries: function(url) {
        var params = {};
        url = url.split('?')[1];
        if(url) {
            url = url.replace(/\[\]/g, '');
            $.each(url.split('&'), function(k, v) {
                var unit = v.split('=');
                var key = unit[0];
                var value = unit[1];
                var obj = params[key];
                if (obj) {
                    typeof obj === 'string' && (obj = obj.split());
                    obj.push(value);
                    params[key] = obj;
                } else {
                    params[key] = value;
                }
            });
        }
        // console.log(params);
        return params;
    }
  
};
