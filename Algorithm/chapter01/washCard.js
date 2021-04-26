/**实现洗牌算法 */
var card_num = 54;

function wash_card(card_num) {
    var cards = [],
        tmp = [],
        index;
    for (var i = 0; i < card_num; i++) {
        tmp[i] = i + 1;
    }
    for (i = 0; i < card_num; i++) {
        index = Math.floor(Math.random() * (card_num - i));
        cards[i] = tmp[index];
        tmp.splice(index, 1);
    }
    return cards;
}
console.log(wash_card(card_num));