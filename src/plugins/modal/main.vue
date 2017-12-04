<template>
  <div class="modal fade">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" @click="handleAction('close')">
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 class="modal-title">{{ title }}</h4>
        </div>
        <div class="modal-body">
          <vex-dialog-body ref="body"></vex-dialog-body>
          <div class="overlay" v-show="loading">
            <i class="glyphicon glyphicon-refresh"></i>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="handleAction('ok')">确认</button>
          <button type="button" class="btn btn-default" @click="handleAction('cancel')">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      loading: false
    }
  },

  methods: {
    handleAction(button) {
      this.$emit('action', button)
    },

    open() {
      this.modalEl = $(this.$el).modal().one('hidden.bs.modal', () => {
        this.modalEl.data('bs.modal', null).remove()
      })
    },

    close() {
      this.modalEl.modal('hide')
    }
  }
}
</script>

<style scoped>
.overlay {
  text-align: center;
  height: 30px;
  line-height: 30px;
}

.overlay .glyphicon-refresh {
  animation: spin 2s infinite linear;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
</style>
