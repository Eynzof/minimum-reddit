const parse = require('html-react-parser')
const dayjs = require('dayjs')
const relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)


const parseTime = (t) => {
    const ts = dayjs.unix(t);
    return ts.fromNow();
}

export default parseTime;