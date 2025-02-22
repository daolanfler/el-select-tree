import Vue from 'vue';

export const ElSelectMixinOptions = {
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    name: String,
    id: String,
    value: {
      required: true
    },
    autocomplete: String,
    autoComplete: String,
    automaticDropdown: Boolean,
    size: String,
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    allowCreate: Boolean,
    loading: Boolean,
    popperClass: String,
    remote: Boolean,
    loadingText: String,
    noMatchText: String,
    noDataText: String,
    remoteMethod: Function,
    filterMethod: Function,
    multiple: Boolean,
    multipleLimit: Number,
    placeholder: String,
    defaultFirstOption: Boolean,
    reserveKeyword: Boolean,
    valueKey: String,
    collapseTags: Boolean,
    popperAppendToBody: {
      type: Boolean,
      default: true
    }
  }
};
export const ElSelectMixin = Vue.extend(ElSelectMixinOptions);

export const ElTreeMixinOptions = {
  props: {
    data: Array,
    emptyText: String,
    renderAfterExpand: {
      type: Boolean,
      default: true
    },
    nodeKey: String,
    checkStrictly: Boolean,
    defaultExpandAll: Boolean,
    // expandOnClickNode: Boolean,
    // checkOnClickNode: Boolean,
    checkDescendants: Boolean,
    autoExpandParent: { type: Boolean, default: true },
    defaultCheckedKeys: Array,
    defaultExpandedKeys: Array,
    currentNodeKey: [String, Number],
    renderContent: Function,
    showCheckbox: Boolean,
    // draggable: Boolean,
    // allowDrag: Function,
    // allowDrop: Function,
    props: Object,
    lazy: Boolean,
    highlightCurrent: Boolean,
    load: Function,
    // filterNodeMethod: Function,
    accordion: Boolean,
    indent: Number,
    iconClass: String
  }
};
export const ElTreeMixin = Vue.extend(ElTreeMixinOptions);

export function propsPick(props: Obj, keys: string[]) {
  const result: Obj = {};
  keys.forEach((key) => {
    key in props && (result[key] = props[key]);
  });
  return result;
}

export function toArr(val: any) {
  return Array.isArray(val) ? val : val || val === 0 ? [val] : [];
}

export function isValidArr(val: any) {
  return Array.isArray(val) && val.length;
}

export type Obj = { [p: string]: any };
