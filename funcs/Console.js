const Console = ({env = "prod", mode = "log", props}) => {
    if(env === 'dev') console[mode](...props)
}

export default Console