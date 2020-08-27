const { connect } = require("react-redux")

const mapStateToProps = (state)=>{
    return state
}

export const connectReducer = (module,mapDispatchToProps)=>{
    return connect(mapStateToProps,mapDispatchToProps)(module)
}

export const appSettings = {
    appId: '',
    authKey: '',
    authSecret: '',
    accountKey: ''
  };