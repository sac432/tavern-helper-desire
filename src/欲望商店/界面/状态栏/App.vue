<template>
  <div class="panel">
    <header class="header">
      <span class="scene">{{ store.data.系统.当前场景 || '—' }}</span>
      <span class="meta">{{ store.data.系统.日期 }} {{ store.data.系统.时间段 }}</span>
      <span class="balance">¥{{ store.data.欲望商店.余额 }}</span>
    </header>

    <div class="body">
      <section class="section">
        <h3 class="section-title">身体</h3>
        <div class="row">
          <span class="label">身高</span><span class="value">{{ store.data.林若曦.身体变化.身高 }}cm</span>
          <span class="label">胸围</span><span class="value">{{ store.data.林若曦.身体变化.胸围 }}</span>
          <span class="label">腰围</span><span class="value">{{ store.data.林若曦.身体变化.腰围 || '—' }}</span>
          <span class="label">臀围</span><span class="value">{{ store.data.林若曦.身体变化.臀围 || '—' }}</span>
        </div>
      </section>

      <section class="section">
        <h3 class="section-title">开发等级</h3>
        <div class="dev-grid">
          <div class="dev-item">
            <span class="dev-icon">口</span>
            <span class="dev-level">Lv.{{ store.data.林若曦.开发等级.口.敏感度等级 }}</span>
          </div>
          <div class="dev-item">
            <span class="dev-icon">胸</span>
            <span class="dev-level">Lv.{{ store.data.林若曦.开发等级.胸.敏感度等级 }}</span>
          </div>
          <div class="dev-item">
            <span class="dev-icon">穴</span>
            <span class="dev-level">Lv.{{ store.data.林若曦.开发等级.穴.敏感度等级 }}</span>
          </div>
          <div class="dev-item">
            <span class="dev-icon">肛</span>
            <span class="dev-level">Lv.{{ store.data.林若曦.开发等级.肛.敏感度等级 }}</span>
          </div>
        </div>
      </section>

      <section class="section">
        <h3 class="section-title">名望</h3>
        <div class="reputation-grid">
          <div class="rep-item">
            <span class="rep-label">学校</span>
            <span class="rep-name">{{ store.data.名望.学校.名声 }}</span>
            <span class="rep-desc">{{ store.data.名望.学校.描述 }}</span>
          </div>
          <div class="rep-item">
            <span class="rep-label">父母</span>
            <span class="rep-name">{{ store.data.名望.父母.名声 }}</span>
            <span class="rep-desc">{{ store.data.名望.父母.描述 }}</span>
          </div>
          <div class="rep-item">
            <span class="rep-label">网络</span>
            <span class="rep-name">{{ store.data.名望.网络.名声 }}</span>
            <span class="rep-desc">{{ store.data.名望.网络.描述 }}</span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from './store';

const store = useDataStore();
</script>

<style lang="scss" scoped>
.panel {
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  background: linear-gradient(135deg, #1a0a2e 0%, #0d0d1a 100%);
  border: 1px solid #3a1a5e;
  border-radius: 8px;
  font-family: 'Segoe UI', sans-serif;
  font-size: 12px;
  color: #d4c5e8;
  line-height: 1.4;
  overflow: hidden;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 12px;
  background: rgba(100, 30, 160, 0.2);
  border-bottom: 1px solid #3a1a5e;

  .scene {
    font-weight: 600;
    color: #c8a0f0;
  }

  .meta {
    color: #7a6a9a;
    font-size: 11px;
  }

  .balance {
    color: #ffd700;
    font-weight: 600;
  }
}

.body {
  padding: 8px 12px;
}

.section {
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
}

.section-title {
  margin: 0 0 4px;
  font-size: 11px;
  font-weight: 600;
  color: #8a6ab0;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 1px solid #2a1a40;
  padding-bottom: 2px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 12px;

  .label {
    color: #7a6a9a;
    font-size: 11px;
  }

  .value {
    color: #e0d0f0;
    font-weight: 500;
  }
}

.dev-grid {
  display: flex;
  gap: 6px;
}

.dev-item {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 4px 6px;
  background: rgba(100, 30, 160, 0.15);
  border: 1px solid #3a1a5e;
  border-radius: 4px;

  .dev-icon {
    font-size: 14px;
    font-weight: 700;
    color: #c8a0f0;
  }

  .dev-level {
    color: #e0d0f0;
    font-weight: 500;
  }
}

.reputation-grid {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.rep-item {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 3px 6px;
  background: rgba(100, 30, 160, 0.08);
  border-radius: 4px;

  .rep-label {
    font-size: 11px;
    color: #7a6a9a;
    min-width: 28px;
    font-weight: 600;
  }

  .rep-name {
    color: #c8a0f0;
    font-weight: 600;
    min-width: 60px;
  }

  .rep-desc {
    color: #9a8aba;
    font-size: 11px;
    flex: 1;
  }
}
</style>