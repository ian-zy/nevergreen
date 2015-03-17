var React = require('react/addons')

module.exports = {

    AddTray: React.createClass({
        getInitialState: function () {
            return {
                url: '',
                username: '',
                password: ''
            }
        },

        render: function () {
            return (
                <div className='tracking-cctray-group-cctray-form'>
                    <label htmlFor='cctray-url' className='tracking-cctray-group-cctray-form-label'>Url</label>
                    <input id='cctray-url' className='tracking-cctray-group-cctray-form-input' type='text' placeholder='cctray url' onChange={this.updateUrl}/>
                    <button id='cctray-fetch' className='tracking-cctray-group-cctray-form-button dashboard-button dashboard-button-secondary' onClick={this.onClick}>Fetch</button>
                    <div>
                        <div id='authentication-group' className='tracking-cctray-group-authentication'>
                            <label htmlFor='username'>Username</label>
                            <input id='username' className='tracking-cctray-group-cctray-form-input-authentication tracking-cctray-group-cctray-form-input' type='text' onChange={this.updateUsername} />
                            <label htmlFor='password'>Password</label>
                            <input id='password' className='tracking-cctray-group-cctray-form-input-authentication tracking-cctray-group-cctray-form-input' type='password' onChange={this.updatePassword} />
                        </div>
                    </div>
                </div>
            )
        },

        updateUrl: function (event) {
            this.setState({url: event.target.value})
        },

        updateUsername: function (event) {
            this.setState({username: event.target.value})
        },

        updatePassword: function (event) {
            this.setState({password: event.target.value})
        },

        onClick: function () {
            this.props.addTray(this.state)
        }
    })

}