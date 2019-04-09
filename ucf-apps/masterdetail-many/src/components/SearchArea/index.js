import { FormattedMessage, injectIntl } from 'react-intl';
import React, {Component} from 'react'
import {actions} from "mirrorx";
import {FormControl} from "tinper-bee";
import FormList from 'components/FormList';
import SearchPanel from 'components/SearchPanel';
import FormControlPhone from 'components/FormControlPhone';

import './index.less'

const FormItem = FormList.Item;

class SearchArea extends Component {

    constructor(props) {
        super(props);
        this.state = {}

    }

    componentDidMount(){
        this.props.onRef(this)
    }

    /** 查询数据
     * @param {*} error 校验是否成功
     * @param {object} values 表单数据
     */
    search = () => {
        this.props.form.validateFields((err, values) => {
            const {passengerObj} = this.props;
            const {pageSize} = passengerObj;
            values.pageIndex = 0;  // 默认回到第一页
            values.pageSize = pageSize;
            actions.masterDetailMany.loadList(values);
        } );
    }

    /**
     * 清空 action里的搜索条件
     */
    reset = () => {
        this.props.form.resetFields();
        actions.masterDetailMany.updateState({searchParam: {}});
    }

    render() {
        const {form} = this.props;
        const {getFieldProps} = form;
        return (
            <SearchPanel
                reset={this.reset}
                search={this.search}>

                <FormList size="sm">
                    <FormItem
                        label={<FormattedMessage id="js.com.Sea1.0001" defaultMessage="乘客编号" />}
                    >
                        <FormControl
                            placeholder={this.props.intl.formatMessage({id:"js.com.Sea1.0002", defaultMessage:"模糊查询"})}
                            {...getFieldProps('search_code', {initialValue: '',})}
                        />
                    </FormItem>

                    <FormItem
                        label={<FormattedMessage id="js.com.Sea1.0003" defaultMessage="乘客姓名" />}
                    >
                        <FormControl
                            placeholder={this.props.intl.formatMessage({id:"js.com.Sea1.0002", defaultMessage:"模糊查询"})}
                            {...getFieldProps('search_name', {initialValue: '',})}
                        />
                    </FormItem>

                    <FormItem
                        label={<FormattedMessage id="js.com.Sea1.0004" defaultMessage="手机号" />}
                    >
                        <FormControlPhone
                            placeholder={this.props.intl.formatMessage({id:"js.com.Sea1.0002", defaultMessage:"模糊查询"})}
                            {...getFieldProps('search_phone', {initialValue: "",})}
                        />
                    </FormItem>

                    <FormItem
                        label={<FormattedMessage id="js.com.Sea1.0005" defaultMessage="联系人姓名" />}
                    >
                        <FormControl
                            placeholder={this.props.intl.formatMessage({id:"js.com.Sea1.0006", defaultMessage:"精确查询"})}
                            {...getFieldProps('search_contactName', {initialValue: '',})}
                        />
                    </FormItem>
                </FormList>

            </SearchPanel>
        )
    }
}

export default FormList.createForm()(injectIntl(SearchArea))
