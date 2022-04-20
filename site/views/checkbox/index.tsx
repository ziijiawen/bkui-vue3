/*
* Tencent is pleased to support the open source community by making
* 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) available.
*
* Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
*
* 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) is licensed under the MIT License.
*
* License for 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition):
*
* ---------------------------------------------------
* Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
* documentation files (the "Software"), to deal in the Software without restriction, including without limitation
* the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
* to permit persons to whom the Software is furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of
* the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
* THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
* CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
* IN THE SOFTWARE.
*/

import { defineComponent } from 'vue';

import DemoBox from '../../components/demo-box';
import DemoTitle from '../../components/demo-title';
import PropsBox from '../../components/props-box';
import {
  type IPropsTableItem,
} from '../../typings';

import Base from './demo/base.vue';
import Group from './demo/group.vue';

const checkboxProps: IPropsTableItem[] = [
  {
    name: 'model-value / v-model',
    type: 'String',
    default: null,
    desc: '邦定值',
    optional: [],
  },
  {
    name: 'label',
    type: 'String / Number / Boolean',
    default: null,
    desc: '选中状态的值',
    optional: [],
  },
  {
    name: 'true-label',
    type: 'String',
    default: null,
    desc: '选中时的值',
    optional: [],
  },
  {
    name: 'false-label',
    type: 'String',
    default: null,
    desc: '没有选中时的值',
    optional: [],
  },
  {
    name: 'disabled',
    type: 'Boolean',
    default: 'false',
    desc: '禁用',
    optional: [],
  },
  {
    name: 'checked',
    type: 'Boolean',
    default: 'false',
    desc: '默认是否勾选',
    optional: [],
  },
  {
    name: 'indeterminate',
    type: 'Boolean',
    default: 'false',
    desc: '是否半选',
    optional: [],
  },
  {
    name: 'beforeChange',
    type: 'Function',
    default: null,
    desc: '状态改变时前置校验函数',
    optional: [],
  },
  {
    name: 'size',
    type: 'String',
    default: null,
    desc: '尺寸',
    optional: ['large', 'small'],
  },
];

const checkboxEvents: IPropsTableItem[] = [
  {
    name: 'change',
    type: 'String',
    default: null,
    desc: '当绑定值变化时触发的事件',
    optional: [],
  },
];

const checkboxGroupProps: IPropsTableItem[] = [
  {
    name: 'model-value / v-model',
    type: 'Array',
    default: '[]',
    desc: '邦定值',
    optional: [],
  },
  {
    name: 'disabled',
    type: 'Boolean',
    default: 'false',
    desc: '禁用',
    optional: [],
  },
];

const checkboxGroupEvents: IPropsTableItem[] = [
  {
    name: 'change',
    type: 'String',
    default: null,
    desc: '当绑定值变化时触发的事件',
    optional: [],
  },
];

export default defineComponent({
  name: 'Checkbox',

  render() {
    return (
      <div>
        <DemoTitle
          name="Checkbox"
          desc="表单-多选框，在一组选项中进行多选"
          link="https://www.qq.com/"/>
        <DemoBox
          title="基础用法"
          desc="使用 bk-checkbox 标签配置多选框"
          componentName="checkbox"
          demoName="/demo/base">
            <Base />
        </DemoBox>
        <DemoBox
          title="多选框组"
          subtitle="多个选项在同一个数组的场景"
          desc="配合 bk-checkbox-grop 使用"
          componentName="checkbox"
          demoName="/demo/group">
            <Group />
        </DemoBox>
        <PropsBox
          title="Checkbox Attributes"
          subtitle=""
          propsData={checkboxProps}/>
        <PropsBox
          title="Checkbox Events"
          subtitle=""
          propsData={checkboxEvents}/>
        <PropsBox
          title="Checkbox-Group Attributes"
          subtitle=""
          propsData={checkboxGroupProps}/>
        <PropsBox
          title="Checkbox-Group Events"
          subtitle=""
          propsData={checkboxGroupEvents}/>
      </div>
    );
  },
});