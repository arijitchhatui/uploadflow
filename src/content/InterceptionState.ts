import type { MessageService } from '../services/MessageService';
import type { ExtensionConfig } from '../types/Message';
import { PAGE_INTERCEPTOR_SOURCE, type PageInterceptorState } from '../types/PageInterceptor';

export class InterceptionState {
  private active = false;
  private readonly messageService: MessageService;

  constructor(messageService: MessageService) {
    this.messageService = messageService;
  }

  get enabled(): boolean {
    return this.active;
  }

  register(): void {
    chrome.storage.onChanged.addListener(this.handleStorageChange);
    void this.refresh();
  }

  unregister(): void {
    chrome.storage.onChanged.removeListener(this.handleStorageChange);
  }

  private readonly handleStorageChange = (changes: Record<string, chrome.storage.StorageChange>, areaName: string): void => {
    if (areaName === 'local' && ('settings' in changes || 'isEnabled' in changes)) void this.refresh();
  };

  private async refresh(): Promise<void> {
    try {
      const config = await this.messageService.send<ExtensionConfig>({ type: 'GET_CONFIG' });
      this.update((config.isEnabled ?? true) && Boolean(config.settings?.generalSettings?.enableUploadFlow));
    } catch {
      this.update(false);
    }
  }

  private update(enabled: boolean): void {
    this.active = enabled;
    const state: PageInterceptorState = {
      source: PAGE_INTERCEPTOR_SOURCE,
      type: 'STATE',
      enabled
    };
    window.postMessage(state, '*');
  }
}
