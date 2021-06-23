import { connect } from 'react-redux'
import Home from '../components/Home'

const mapStateToProps = (state) => {
  return{
    hello : state.hello
  }
}

export default connect(mapStateToProps)(Home)