/**
 *
 * @title ref-tree 参照-树形
 * @description 具有单选多选的树形参照
 *
 */

import { FormattedMessage } from 'react-intl';
import React, { Component } from 'react';
import PapRefRole from 'pap-refer/lib/pap-ref-role';
import 'pap-refer/lib/pap-ref-role.css';
import PapRefPosition from 'pap-refer/lib/pap-ref-position';
import 'pap-refer/lib/pap-ref-position.css';
import { Button, Form } from 'tinper-bee';
import Card from '../Card'
let code =
`

import React, { Component } from 'react';
import PapRefRole from 'pap-refer/lib/pap-ref-role';
import 'pap-refer/lib/pap-ref-role.css';
import PapRefPosition from 'pap-refer/lib/pap-ref-position';
import 'pap-refer/lib/pap-ref-position.css';
import { Button, Form } from 'tinper-bee';
import Card from '../Card'
class Demo4 extends Component {
	constructor() {
		super();
		this.state = {
			value: ''
		}

	}
	render() {

		const { getFieldProps, getFieldError } = this.props.form;
		return (
			<Card
				title={this.props.intl.formatMessage({id:"js.Ref.Ref10.0001", defaultMessage:"业务示例"})}
				codeText={code}
				intl={this.props.intl}
				footer={
					<Button colors="primary"
						style={{
							margin: 'auto 5px',
							height: '30px',
							padding: '0px'
						}}
						onClick={() => {
							this.props.form.validateFields((err, values) => {
								if (err) return;
								alert(this.props.intl.formatMessage({id:"js.Ref.Ref10.0002", defaultMessage:"您选择的是"})+JSON.stringify(values))
							});
						}}
					>
						<FormattedMessage id="js.Ref.Ref10.0003" defaultMessage="提交" />
                            </Button>
				}
			>
				<div className="demo-label">
					<span ><FormattedMessage id="js.Ref.Ref10.0004" defaultMessage="角色" /></span>
					<PapRefRole
						multiple={false}
						searchable={true}
						checkStrictly={true}
						strictMode={true}
						displayField='{refname}'
						valueField='refpk'
						lang={this.props.lang}
						{...getFieldProps('code', {
							initialValue: '{"refname":"","refpk":""}',
							rules: [{
								message: <FormattedMessage id="js.Ref.Ref10.0005" defaultMessage="提示：请选择" />,
								pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
							}]
						})}
						emptyBut={true}

					/>
					<span style={{
						color: 'red'
					}}>
						{
							getFieldError('code')
						}
					</span>
				</div>
				<div className="demo-label">
					<span ><FormattedMessage id="js.Ref.Ref10.0006" defaultMessage="岗位" /></span>
					<PapRefPosition 
						multiple={false}
						searchable={true}
						checkStrictly={true}
						strictMode={true}
						displayField='{refname}'
						valueField='refpk'
						lang={this.props.lang}
						emptyBut={true}

						{...getFieldProps('code1', {
							initialValue: '{"refname":"","refpk":""}',
							rules: [{
								message: <FormattedMessage id="js.Ref.Ref10.0005" defaultMessage="提示：请选择" />,
								pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
							}]
						})}
					/>

					<span style={{
						color: 'red'
					}}>
						{
							getFieldError('code1')
						}
					</span>
				</div>
			</Card>
		)
	}
};

`
class Demo4 extends Component {
	constructor() {
		super();
		this.state = {
			value: ''
		}

	}
	render() {

		const { getFieldProps, getFieldError } = this.props.form;
		return (
			<Card
				title={this.props.intl.formatMessage({id:"js.Ref.Ref10.0001", defaultMessage:"业务示例"})}
				codeText={code}
				intl={this.props.intl}
				footer={
					<Button colors="primary"
						style={{
							margin: 'auto 5px',
							height: '30px',
							padding: '0px'
						}}
						onClick={() => {
							this.props.form.validateFields((err, values) => {
								if (err) return;
								alert(this.props.intl.formatMessage({id:"js.Ref.Ref10.0002", defaultMessage:"您选择的是"})+JSON.stringify(values))
							});
						}}
					>
						<FormattedMessage id="js.Ref.Ref10.0003" defaultMessage="提交" />
                            </Button>
				}
			>
				<div className="demo-label">
					<span ><FormattedMessage id="js.Ref.Ref10.0004" defaultMessage="角色" /></span>
					<PapRefRole
						multiple={false}
						searchable={true}
						checkStrictly={true}
						strictMode={true}
						displayField='{refname}'
						valueField='refpk'
						lang={this.props.lang}
						{...getFieldProps('code', {
							initialValue: '{"refname":"","refpk":""}',
							rules: [{
								message: <FormattedMessage id="js.Ref.Ref10.0005" defaultMessage="提示：请选择" />,
								pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
							}]
						})}
						emptyBut={true}

					/>
					<span style={{
						color: 'red'
					}}>
						{
							getFieldError('code')
						}
					</span>
				</div>
				<div className="demo-label">
					<span ><FormattedMessage id="js.Ref.Ref10.0006" defaultMessage="岗位" /></span>
					<PapRefPosition 
						multiple={false}
						searchable={true}
						checkStrictly={true}
						strictMode={true}
						displayField='{refname}'
						valueField='refpk'
						lang={this.props.lang}
						emptyBut={true}

						{...getFieldProps('code1', {
							initialValue: '{"refname":"","refpk":""}',
							rules: [{
								message: <FormattedMessage id="js.Ref.Ref10.0005" defaultMessage="提示：请选择" />,
								pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
							}]
						})}
					/>

					<span style={{
						color: 'red'
					}}>
						{
							getFieldError('code1')
						}
					</span>
				</div>
			</Card>
		)
	}
};

export default Form.createForm()(Demo4);


