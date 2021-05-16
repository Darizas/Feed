function getData(data) {

    let HTML = '';
    let feed = document.querySelector('.feed');

    if (Array.isArray(data)) {
        // console.log(data);
        // for (let i = 0; i < data.length; i++) {
        //     HTML += getList(data[i]);
        // }
        for (index of data) {
            HTML += getList(index);
        }
        return feed.innerHTML = HTML;
    } else {
        console.log('Nemasyvas');
    }
}

function getList(list) {

    let HTML = `<div class="block">
                    ${blockHead(list.autorius, list.laikas)}
                    ${blockMain(list.pranesimas)}
                    ${blockComment(list.autorius)}
                </div>`;

    return HTML;
}

function blockHead(who, timer) {
    let head = `<div class="block__head">
                    <img class="block__head__img" src="./img/avatar/${getAvatar(who)}" alt="avatar" />
                    <div class="user">
                        <div class="name">${who.vardas} ${who.pavarde}</div>
                        <div class="time">${timeGone(timer)}</div>
                    </div>
                    <div class="more">
                        <div class="more__block">
                            <i class="fa fa-ellipsis-v"></i>
                        </div>
                    </div>
                </div>`
    return head;
}

function blockMain(text) {
    let main = `<div class="block__main">
                    <p>${text.tekstas}</p>
                    <div class="gallery">${getGallery(text.paveiksliukai)}</div>
                </div>`;
    return main;
}

function blockComment(who) {
    let comment = `<div class="block__comment">
                        <div class="reactions">
                            <div class="reactions__block">
                                <i class="fa fa-fw fa-thumbs-up"></i>Like
                            </div>
                            <div class="reactions__block">
                                <i class="fa fa-fw fa-comment"></i>Comment
                            </div>
                            <div class="reactions__block">
                                <i class="fa fa-fw fa-share"></i>Share
                            </div>
                        </div>
                        <div class="comment">
                        <img class="comment__img" src="./img/avatar/${getAvatar(who)}" alt="avatar" />
                            <input class="comment__input" type="text" name="comment" placeholder="Write Your comment..." />
                            <div class="badges">
                                <div class="badges__block"><i class="fa fa-smile-o"></i></div>
                                <div class="badges__block"><i class="fa fa-camera"></i></div>
                                <div class="badges__block"><i class="fa fa-image"></i></div>
                                <div class="badges__block"><i class="fa fa-snapchat-square"></i></div>
                            </div>
                        </div>
                    </div>`;
    return comment;
}

function timeGone(list) {
    let time;
    let y = Math.floor(list / 3600 / 24 / 365);
    let d = Math.floor(list / 3600 / 24);
    let h = Math.floor(list / 3600);
    let min = Math.floor(list / 60);

    if (y>0) {
        time = `${y} y.`;
    } else if (d>0) {
        time = `${d} d.`;
    } else if (h>0) {
        time = `${h} h.`;
    } else if (min > 0) {
        time = `${min} min.`;
    } else {
        time=`${list} s.`
    }
    return time;
}

function getAvatar(img) {
    if (img.avataras === '') {
        img.avataras = 'avataras.png'
    }
    let avatar = `${img.avataras}`;
    return avatar;
}

function getGallery(img) {

    let HTML = '';
    if (img.length > 0) {
        HTML = `<img class="img0" src="./img/${img[0]}" alt="image">`
        for (let i = 1; i < img.length; i++){
            HTML += `<img class="imgs" src="./img/${img[i]}" alt="image">`;
        }
    } else {
        HTML = '';
    }
    return HTML;
}

getData(feed);