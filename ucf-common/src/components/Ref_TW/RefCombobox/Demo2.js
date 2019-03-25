/**
 *
 * @title combobox参照组件_tw
 * @description 应用组件描述_tw
 *
 */

import React, { Component } from 'react';
import {RefComboBox, ComboStore } from 'pap-refer/dist/index';
import 'pap-refer/dist/index.css';
// import Button from 'bee-button';
// import Icon from 'bee-icon';
// import Form from "bee-form";
import { Button, Icon, Form } from 'tinper-bee';
import Card from '../Card'
let code = `
<div className="demoPadding">
      <RefComboBox
          displayField={'{refname}-{refcode}'}
          valueField={'refpk'}
          onClickItem={(record) => {
              console.log(record)
          }}

          matchUrl='/pap_basedoc/common-ref/matchPKRefJSON'
          filterUrl='/pap_basedoc/common-ref/filterRefJSON'
          {...getFieldProps('combobox', {
              // initialValue:'{"refpk":"level1","refname":"初级"}',  //M0000000000002
              rules: [{
                  message: '提示：请选择_tw',
                  pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
              }]
          })}
      >
          <ComboStore
              ajax={{
                  url: '/pap_basedoc/common-ref/blobRefTreeGrid',
                  params: {
                      refCode: 'neworganizition_grid'
                  },

              }}
              strictMode={true}
              displayField={(record) => {
                  return <div > <Icon type="uf-personin-o" style={{ color: 'red' }} /> {record.refname}-{record.refcode}-{record.type}</div>
              }}
              lang={this.props.lang}
          />
      </RefComboBox>
      <span style={{ color: 'red' }}>
          {getFieldError('combobox')}
      </span>
      <Button
          colors="primary"
          onClick={() => {
              this.props.form.validateFields((err, values) => {
                  console.log(err, values)
              });
          }}>
          提交_tw
  </Button>
</div>           
`
class Demo2 extends Component {
  render() {

    const { getFieldError, getFieldProps } = this.props.form;
    return (
      <Card
        title="特殊样式示例_tw"
        codeText={code}
      >
        <div className="demoPadding">
          <RefComboBox
            displayField={'{refname}-{refcode}'}
            valueField={'refpk'}
            onClickItem={(record) => {
              console.log(record)
            }}
            matchUrl='/pap_basedoc/common-ref/matchPKRefJSON'
            filterUrl='/pap_basedoc/common-ref/filterRefJSON'
            className="ref-walsin-modal"
            {...getFieldProps('combobox', {
              // initialValue:'{"refpk":"level1","refname":"初级"}',  //M0000000000002
              rules: [{
                message: '提示：请选择_tw',
                pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
              }]
            })}

          >
            <ComboStore
              ajax={{
                url: '/pap_basedoc/common-ref/blobRefTreeGrid',
                params: {
                  refCode: 'neworganizition_grid'
                },

              }}
              strictMode={true}
              displayField={(record) => {
                return <div > <Icon type="uf-personin-o" style={{ color: 'red' }} /> {record.refname}-{record.refcode}-{record.type}</div>
              }}
              lang={this.props.lang}
              topPagination={true}
            />
          </RefComboBox>
          <span style={{ color: 'red' }}>
            {getFieldError('combobox')}
          </span>
          <Button
            colors="primary"
            onClick={() => {
              this.props.form.validateFields((err, values) => {
                console.log(err, values)
              });
            }}>
            提交_tw
                </Button>
        </div>

      </Card>
    )
  }
}


export default Form.createForm()(Demo2);