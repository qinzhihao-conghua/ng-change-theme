(function () {
    var base = { 'bodyColor': '#f5f5f5', 'childColor': '#fff' };
    var change = { 'bodyColor': '#565656', 'childColor': '#ccc' };
    sessionStorage.setItem(`base`, JSON.stringify(base));
    sessionStorage.setItem(`change`, JSON.stringify(change));
})();