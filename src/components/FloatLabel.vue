<template>
    <div class="float-label" :class="{'float-label--fade-anim' : shouldFade, 'float-label--on-focus' : props.onFocus, 'float-label--fixed' : isFloated}" ref="root">
        <slot></slot>
        <label class="float-label__label" :for="formElemId">{{ labelText }}</label>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, onBeforeUnmount } from 'vue'

    let root = ref(null)
    let labelText = ref('')
    let placeholderText = ref('')
    let labelRef = ref(props.label)
    let formElem = ref({})
    let formElemId = ref('')
    let formElemType = ref('')
    let formElemHasContent = ref(false)
    let isValidFormElem = ref(false)
    const compatibleFloatElemsQuery = '[type=date], [type=datetime-local], [type=datetime], [type=email], [type=month], [type=number], [type=password], [type=search], [type=tel], [type=text], [type=time], [type=url], [type=week], textarea, select'

    const props = defineProps({
        label: {type: String, default: ''},
        float: {type: Boolean},
        onFocus: {type: Boolean, default: false}
    })

    const labelComputed = computed(()=>{
        return props.label
    })
    const shouldFade = computed(()=>{
        return placeholderText.value && labelText.value !== placeholderText.value
    })
    const isFloated = computed(()=>{
        let float = false
        if( props.float ) {
            float = props.float
        } else {
            float = formElemHasContent.value
        }
        return float
    })
    const getLabelText = () => {
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
    // Watch for form element input
    const watchForFormChanges = () => {
        formElem.value.addEventListener('input', updateIsFloatedVar)
    }
    const updateIsFloatedVar = (e) => {
        formElemHasContent.value = e.target.value.length > 0 ? true : false
    }
    const destroyWatchers = () => {
        formElem.value.removeEventListener('input', updateIsFloatedVar)
    }

    // Watchers
    watch(labelComputed, (newVal, oldVal)=>{
        getLabelText()
    })
    
    onMounted(() => {
        formElem.value = root.value.querySelector(compatibleFloatElemsQuery)
        isValidFormElem.value = formElem.value ? true : false;
        if( isValidFormElem.value ) {
            formElemId.value = getFormElemId()
            formElemType.value = formElem.value ? formElem.value.tagName.toLowerCase() : ''
            placeholderText.value = getPlaceholderValue()
            setMatchingIds()
            setTimeout(() => {
                watchForFormChanges()
            }, 200);
        } else {
            placeholderText.value = ''
        }
        getLabelText()
    })
    onBeforeUnmount(() => {
        destroyWatchers()
    })
    
</script>

