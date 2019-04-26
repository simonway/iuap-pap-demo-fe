/**
 * 入口、导入组件样式、渲染
 */
import  "babel-polyfill"
import { FormattedMessage, injectIntl } from 'react-intl';
import React,{Component} from 'react';
import { render } from 'mirrorx';
import 'ucf-common/styles/public.less';
import './app.less';
import {getCookie} from './util';
let lang = getCookie('u_locale') || getCookie('i18next') || 'zh_CN';
import Intl from 'components/Intl'
// let dir = lang.toLocaleLowerCase()==='en_us'?'Ref_EN':(lang.toLocaleLowerCase()==='zh_tw'?'Ref_TW':'Ref');
import {  
  RefTreeDemo1,
  RefTreeDemo2,
  RefTreeDemo3,
  RefTreeDemo4,
  RefTreeDemo5,
  RefTreeDemo6,
} from "./components/Ref/RefTree"
  import {
    RefTableDemo1,
    RefTableDemo2,
    RefTableDemo3,
    RefTableDemo4,
  } from "./components/Ref/RefTable"
  
  import {
    RefTreeTransferDemo1,
    RefTreeTransferDemo2
  } from "./components/Ref/RefTreeTransfer"

  import {
    RefTreeTableDemo1,
  } from "./components/Ref/RefTreeTable"
  
  import {
    RefJiLianDemo1,
    RefJiLianDemo2,
    RefJiLianDemo3,
  } from "./components/Ref/RefJiLian"

  
  import {RefComboboxDemo1,RefComboboxDemo2} from "./components/Ref/RefCombobox"
  import {RefMdmDemo1} from "./components/Ref/RefMdm"
  // import 'pap-refer/lib/ref-combobox/src/index.css'
  // import 'pap-refer/lib/ref-tree-transfer/src/index.css';
  class App extends Component {
    constructor() {
      super();
      this.state = {
        checkedArray: [],
        value: '',
        count: [],
        refpk: '',
        refname: '',
        strictMode: false,
        theme:'ref-red',//切换主题，默认红色
      }
  
      setTimeout(() => {
        this.setState({
          strictMode: true
        });
      })
    }
    changeTheme = () =>{
      this.setState({
        theme:this.state.theme === 'ref-red'?'ref-blue':'ref-red'
      })
    }
  
    render() {
      let { strictMode,theme } = this.state;
      return (
        <div>
          {/* <h2 className="change-theme" onClick={this.changeTheme} >{`切换主题：当前主题是（${theme==='ref-red'?'红色':'蓝色'}）`}</h2> */}
          <h2><FormattedMessage id="js.ref.src.0001" defaultMessage="树参照" /></h2>
          <div className={`demo-row ${theme}`}>
            <div className="demo-col">
              <RefTreeDemo1 lang={lang} theme={theme} {...this.props}/>
            </div>
            <div className="demo-col">
              <RefTreeDemo2 lang={lang} theme={theme} {...this.props}/>
            </div>
            <div className="demo-col">
              <RefTreeDemo3 lang={lang} theme={theme} {...this.props}/>
            </div>
            <div className="demo-col">
              <RefTreeDemo4 lang={lang} theme={theme} {...this.props}/>
            </div>
            <div className="demo-col">
              <RefTreeDemo5 lang={lang} theme={theme} {...this.props}/>
            </div>
            <div className="demo-col">
              <RefTreeDemo6 lang={lang} theme={theme} {...this.props}/>
            </div>
          </div>
          <h2><FormattedMessage id="js.ref.src.0002" defaultMessage="表格参照" /></h2>
          <div className={`demo-row ${theme}`}>
            <div className="demo-col">
              <RefTableDemo1 lang={lang} theme={theme} {...this.props}/>
            </div>
            <div className="demo-col">
              <RefTableDemo2 lang={lang} theme={theme} {...this.props}/>
            </div>
          </div>
          <div className={`demo-row ${theme}`}>
            <div className="demo-col">
              <RefTableDemo3 lang={lang} theme={theme} {...this.props}
              />
            </div>
          </div>
          <div className={`demo-row ${theme}`}>
            <div className="demo-col">
              <RefTableDemo4 lang={lang} theme={theme} {...this.props}
              />
            </div>
          </div>
          <h2><FormattedMessage id="js.ref.src.0003" defaultMessage="级联参照" /></h2>
          <div className={`demo-row ${theme}`}>
            <div className="demo-col">
              <RefJiLianDemo1 lang={lang} theme={theme} {...this.props}/>
            </div>
            <div className="demo-col">
              <RefJiLianDemo2 lang={lang} theme={theme} {...this.props}/>
            </div>
            <div className="demo-col">
              <RefJiLianDemo3 lang={lang} theme={theme} {...this.props}/>
            </div>
          </div>
          
          <h2><FormattedMessage id="js.ref.src.0004" defaultMessage="穿梭参照" /></h2>
          <div className={`demo-row ${theme}`}>
            <div className="demo-col">
              <RefTreeTransferDemo1 lang={lang} theme={theme} {...this.props}/>
            </div>
            <div className="demo-col">
              <RefTreeTransferDemo2 lang={lang} theme={theme} {...this.props}/>
            </div>
          </div>
     
          <h2><FormattedMessage id="js.ref.src.0005" defaultMessage="树表参照" /></h2>
          <div className={`demo-row ${theme}`}>
            <div className="demo-col">
              <RefTreeTableDemo1 lang={lang} theme={theme} {...this.props}
              />
            </div>
          </div>
          <h2><FormattedMessage id="js.ref.src.0006" defaultMessage="combobox参照" /></h2>
          <div className={`demo-row ${theme}`}>
            <div className="demo-col">
              <RefComboboxDemo1 lang={lang} theme={theme} {...this.props}/>
            </div>
            <div className="demo-col">
              <RefComboboxDemo2 lang={lang} theme={theme} {...this.props}/>
            </div>
          </div>
          <h2><FormattedMessage id="js.Ref.Ref224.0004" defaultMessage="自定义参照" /></h2>
          <div className={`demo-row ${theme}`}>
            <div className="demo-col">
              <RefMdmDemo1 lang={lang} theme={theme} {...this.props}/>
            </div>
          </div>
        </div>
      )
    }
  };

const IntlApp = injectIntl(App);

render(
  <Intl>
    <IntlApp/>
  </Intl>
  , document.querySelector("#app"));