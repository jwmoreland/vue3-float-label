<template>
    <div class="float-label" :class="{'float-label--differs' : labelDiffers, 'float-label--on-focus' : props.onFocus, 'float-label--fixed' : forceFloated}" ref="root">
        <slot />
        <label class="float-label__label" :for="formElemId">{{ labelText }}</label>
    </div>
</template>

<script setup>
    import { createCallExpression } from '@vue/compiler-core';
import { ref, computed, onMounted, watch, onBeforeUnmount } from 'vue'

    let root = ref(null)
    let labelText = ref('')
    let placeholderText = ref('')
    let labelRef = ref(props.label)
    let formElem = ref({})
    let formElemId = ref('')
    let formElemType = ref('')

    const props = defineProps({
        label: {type: String, default: ''},
        fixed: {type: Boolean},
        onFocus: {type: Boolean, default: false}
    })

    const labelComputed = computed(()=>{
        return props.label
    })
    const labelDiffers = computed(()=>{
        return labelText.value !== placeholderText.value
    })
    const forceFloated = computed(()=>{
        let float = false
        if(props.fixed !== null || props.fixed !== 'undefined') {
            float = props.fixed
        } else {
            // float = 
        }
        return float
    })
    const getLabelText = () => {
        console.log(labelComputed.value);
        labelText.value = labelComputed.value ? props.label : placeholderText.value
    }
    const getFormElemId = () => {
        return formElem.value.getAttribute('id')
    }
    const createUid = () => {
        let id = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
        return id
    }
    const getPlaceholderValue = () => {
        switch (formElemType.value) {
            case 'input':
            case 'textarea':
                return formElem.value.placeholder
            case 'select':
                let option = formElem.value.querySelector('option[disabled][selected]')
                let text = option ? option.innerHTML : ''
                return text
            default:
                return ''
        }
    }
    const setMatchingIds = () => {
        if(!formElemId.value) {
            formElemId.value = createUid()
            formElem.value.id = formElemId.value
        }
    }


    watch(labelComputed, (newVal, oldVal)=>{
        getLabelText()
    })
    
    onMounted(() => {
        formElem.value = root.value.querySelector('input, textarea, select')
        formElemId.value = getFormElemId()
        formElemType.value = formElem.value ? formElem.value.tagName.toLowerCase() : ''
        placeholderText.value = getPlaceholderValue()
        setMatchingIds()
        getLabelText()
    })
    onBeforeUnmount(() => {

    })
    
</script>

