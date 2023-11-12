import { HttpClient } from '@angular/common/http'
import { importProvidersFrom, makeEnvironmentProviders } from '@angular/core'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'

function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/lazy/', '.json')
}

export const provideLazyTranslation = () =>
  makeEnvironmentProviders([
    importProvidersFrom(
      TranslateModule.forChild({
        defaultLanguage: 'en',
        isolate: true,
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      })
    ),
  ])
