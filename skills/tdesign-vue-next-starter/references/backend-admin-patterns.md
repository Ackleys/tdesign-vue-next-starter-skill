# Backend Admin UI Patterns

Use this when the TDesign UI is a frontend for a backend service.

## Architecture

Keep boundaries simple:

- Page components own route query, table/form state, and user interactions.
- In Starter projects, `src/apis` modules own endpoint paths and request payload mapping.
- In non-Starter projects, use the local API/service module convention.
- The request wrapper owns base URL, auth headers, interceptors, and error normalization.
- Pinia stores own cross-page user, permission, layout, or cached reference data.
- Reusable components own isolated widgets such as status tags, user selectors, and form sections.

## API Integration

Use the project's request utility, usually under `src/utils/request` in Starter projects. Define backend endpoints under `src/apis` in Starter projects. Avoid direct `fetch` or raw axios in pages unless the existing app already does that.

For list pages, model these states:

- query form state
- pagination state
- loading state
- table data
- selected row keys when batch actions exist
- backend error state

For mutations:

- disable submit while pending
- show success and error feedback with TDesign message/notification utilities
- refresh list or update local row after success
- close dialog only after success

## Permission And Navigation

Starter docs say Vue Next Starter moved default permission control to backend permission control from version 0.7.0. Do not assume all permissions are local route constants.

When adding a route:

- inspect route metadata shape
- include title and authority fields only when the project uses them
- preserve hidden/external/cache conventions
- test direct navigation and sidebar visibility

When the backend returns menus or authorities, keep UI route additions consistent with that contract.

## CRUD Page Blueprint

Use this structure for common admin resources:

```vue
<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { MessagePlugin } from 'tdesign-vue-next';
import { fetchItems, createItem, updateItem, deleteItem } from '@/apis/items';

const loading = ref(false);
const rows = ref([]);
const pagination = reactive({ current: 1, pageSize: 20, total: 0 });
const query = reactive({ keyword: '', status: undefined });

async function loadData() {
  loading.value = true;
  try {
    const result = await fetchItems({ ...query, page: pagination.current, pageSize: pagination.pageSize });
    rows.value = result.list;
    pagination.total = result.total;
  } finally {
    loading.value = false;
  }
}

onMounted(loadData);
</script>
```

Adapt names and result shape to the actual backend contract.

## UX Expectations

- Filters should have reset and search actions.
- Destructive actions need confirmation.
- Tables with many columns need fixed important columns or horizontal scrolling.
- Long forms need validation rules and clear submit/cancel actions.
- Backend validation errors should map to form fields when possible.
