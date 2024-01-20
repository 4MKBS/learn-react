import Emoji from "./Emoji";

export default class Text extends Emoji {
    constructor(props) {
        super(props);
    }
    render() {
        let mtext = this.addEmoji("Sakib", "❤️")

        return super.render(mtext);
    }
}