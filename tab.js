function tabUpdate(tabId) {
    let tabList = document.querySelectorAll('.main-section-services-discover-right--tabs-content-tab')
    for (let i=0; i<tabList.length; i++) {
        tabList[i].classList.remove('active')
    }
    document.getElementById(tabId).classList.add('active')
}