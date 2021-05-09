function getData(data) {

    let HTML = '';
    let feedBlock = document.querySelector('.feed');

    if (Array.isArray(data)) {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            // time = timeGone(data[i]);
            HTML += getList(data[i]);
        }
        return feedBlock.innerHTML = HTML;
    } else {
        console.log('Nemasyvas');
    }
}

function getList(list) {

    let HTML = `<div class="block">
                    ${blockHead(list)}
                    ${blockMain(list)}
                    ${blockComment(list)}
                </div>`;

    return HTML;
}

function blockHead(list) {
    let head = `<div class="block__head">
                    <img class="block__head__img" src="./img/avatar/${list.autorius.avataras}" alt="avatar" />
                    <div class="user">
                        <div class="name">${list.autorius.vardas} ${list.autorius.pavarde}</div>
                        <div class="time">${timeGone(list)}</div>
                    </div>
                    <div class="more">
                        <div class="more__block">
                            <i class="fa fa-ellipsis-v"></i>
                        </div>
                    </div>
                </div>`
    return head;
}

function blockMain(list) {
    let main = `<div class="block__main">${list.pranesimas.tekstas}</div>`;
    return main;
}

function blockComment(list) {
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
                            <img class="comment__img" src="./img/avatar/${list.autorius.avataras}" alt="avatar" />
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
    let y = Math.floor(list.laikas / 3600 / 24 / 365);
    let d = Math.floor(list.laikas / 3600 / 24);
    let h = Math.floor(list.laikas / 3600);
    let min = Math.floor(list.laikas / 60);

    if (y>0) {
        time = `${y} y.`;
    } else if (d>0) {
        time = `${d} d.`;
    } else if (h>0) {
        time = `${h} h.`;
    } else if (min > 0) {
        time = `${min} min.`;
    } else {
        time=`${list.laikas} s.`
    }
    return time;
}

getData(feed);