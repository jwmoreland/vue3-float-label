<template>
    <div class="float-label" :class="{'float-label--fade-anim' : shouldFade, 'float-label--on-focus' : props.onFocus, 'float-label--fixed' : isFloated}" ref="root">
        <slot></slot>
        <div v-if="formElemType === ''" class="float-label__label float-label--no-click"><span class="float-label__label__text">{{ labelText }}</span></div>
        <label v-else class="float-label__label" :class="{'float-label--no-click': formElemType === 'select'}" :for="formElemId"><span class="float-label__label__bg" v-if="formElemType === 'textarea'"></span> <span class="float-label__label__text">{{ labelText }}</span></label>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, onBeforeUnmount } from 'vue'

    const props = defineProps({
        label: {type: String, default: ''},
        float: {type: Boolean, default: null},
        onFocus: {type: Boolean, default: false}
    })

    let root = ref(null)
    let labelText = ref('')
    let placeholderText = ref('')
    let labelRef = ref(null)
    let formElem = ref({})
    let formElemId = ref('')
    let formElemType = ref('')
    let formElemHasContent = ref(false)
    let isUsableFormElem = ref(false)
    let shouldWatchElem = ref(false)
    
    const compatibleFloatElemsQuery = '[type=date], [type=datetime-local], [type=datetime], [type=email], [type=month], [type=number], [type=password], [type=search], [type=tel], [type=text], [type=time], [type=url], [type=week], textarea, select'


    const labelComputed = computed(()=>{
        return props.label
    })
    const shouldFade = computed(()=>{
        // Set to fade if it is NOT a <select>, or placeholder has value AND it's not equal to label
        if(formElemType.value === 'select') {
            return true
        } else {
            return placeholderText.value && labelText.value !== placeholderText.value
        }
    })
    const isFloated = computed(()=>{
        let shouldFloat = false
        if( props.float ) {
            shouldFloat = true
        } else {
            shouldFloat = formElemHasContent.value && formElemHasContent.value !== '0'
        }
        return shouldFloat
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
                let option = formElem.value.querySelector('option:disabled')
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
    const setUpWatchForFormChanges = () => {
        if(formElemType.value === 'select') {
            formElem.value.addEventListener('change', updateIsFloatedOnChange)
        } else {
            formElem.value.addEventListener('input', updateIsFloatedOnChange)
        }
    }
    const destroyWatchers = () => {
        if(formElemType.value === 'select') {
            formElem.value.removeEventListener('change', updateIsFloatedOnChange)
        } else {
            formElem.value.removeEventListener('input', updateIsFloatedOnChange)
        }
    }
    const updateIsFloatedOnChange = (e) => {
        formElemHasContent.value = e.target.value.length > 0 ? true : false
    }

    // Watchers
    watch(labelComputed, (newVal, oldVal)=>{
        getLabelText()
    })
    
    onMounted(() => {
        labelRef.value = props.label
        formElem.value = root.value.querySelector(compatibleFloatElemsQuery)
        isUsableFormElem.value = formElem.value ? true : false;
        shouldWatchElem.value = props.float === null ? true : false;
        if( isUsableFormElem.value ) {
            formElemId.value = getFormElemId()
            formElemType.value = formElem.value ? formElem.value.tagName.toLowerCase() : ''
            formElemHasContent.value = formElem.value.value ? true : false
            placeholderText.value = getPlaceholderValue()
            setMatchingIds()
            if(shouldWatchElem.value === true) {
                setTimeout(() => {
                    setUpWatchForFormChanges()
                }, 200);
            }
        } else {
            placeholderText.value = ''
        }
        getLabelText()
    })
    onBeforeUnmount(() => {
        if(isUsableFormElem.value) {
            destroyWatchers()
        }
    })
    
</script>
