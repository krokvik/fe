import React from 'react'
import { Form, Icon, Input, Button } from 'antd';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {saveSettings} from "../../actions";
const FormItem = Form.Item;

class SettingsForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.saveSettings(values)
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Form onSubmit={this.handleSubmit} className="settings-form">
                <FormItem>
                    {getFieldDecorator('wallet', {
                        rules: [{ required: true, message: 'Please input your wallet here!' }],
                    })(
                        <Input prefix={<Icon type="wallet" style={{ fontSize: 13 }} />} placeholder="Wallet ID" />
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="settings-form-button">
                        Save wallet
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

const SettingsFormDecorated = Form.create()(SettingsForm);

const mapStateToProps = () => {}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    saveSettings
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SettingsFormDecorated);
