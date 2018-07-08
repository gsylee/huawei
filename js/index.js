var Index = {
    aboutAD: function () {
        // 获取需要的元素对象
        var $topAD = $('#top-ad'),
            $largeAD = $('.large-ad',$topAD),
            $smallAD = $('.small-ad',$topAD);
            $largeAD.find('i').click(function () {
                $largeAD.slideUp('4000',function () {
                    $smallAD.slideDown('10');
                });
            });
            $smallAD.find('i').click(function () {
                $smallAD.hide();
            });
    },

};