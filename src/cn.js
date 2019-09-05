const dict = require('./dict-cn.json');
const decode = require('./decode');
const Engine = require('./engine');

const DICT = decode(dict);

/**
 * 拼音查询引擎
 * @param	{[string]|[Object]}	 data         数据
 * @param	{?string|[string]}   indexs       如果 data 为 [Object]，这里需要建立拼音索引 key
 * @param   {?boolean|[boolean]}  begin       如果 begin 为 true，从开始字符匹配
 * @param   {?boolean|[boolean]}  startWithFirstWord    匹配关键字中每一个字符的的第一个字符
 */
class PinyinEngine extends Engine {
    constructor(data, indexs, begin,startWithFirstWord) {
        super(data, indexs, DICT, (begin && '$'),startWithFirstWord);
    }

    /**
     * 将内容进行分词
     * @param	{string}		  words        目标字符串
     * @return	{string}
     */
    static participle(keyword) {
        return Engine.participle(keyword, DICT);
    }
}

module.exports = PinyinEngine;
