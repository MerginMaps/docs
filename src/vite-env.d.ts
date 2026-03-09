// Copyright (C) Lutra Consulting Limited
//
// SPDX-License-Identifier: LicenseRef-MerginMaps-Commercial

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SMARTLOOK_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}