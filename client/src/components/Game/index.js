import {connect} from "react-redux";
import Game from "./Game";
import {gameState,token} from "../../store/reducer/selectors"
import {getNewGame, hit, stand, reset, getNewToken} from "../../store/reducer/actions";
import {createStructuredSelector} from "reselect";

const mapStateToProp = createStructuredSelector({
    gameState,
    token,
})

const mapDispatchToProps = {
    getNewGame,
    hit,
    stand,
    reset
}

export default connect(mapStateToProp, mapDispatchToProps)(Game);