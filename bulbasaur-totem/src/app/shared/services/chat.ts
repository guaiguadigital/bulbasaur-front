// shared/services/chat.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ChatMessage {
  text: string;
  from: 'bot' | 'user';
}

@Injectable({ providedIn: 'root' })

export class Chat {
  private messagesSubject = new BehaviorSubject<ChatMessage[]>([]);
  messages$ = this.messagesSubject.asObservable();

  addMessage(msg: ChatMessage) {
    const current = this.messagesSubject.value;
    this.messagesSubject.next([...current, msg]);
  }

  clearMessages() {
    this.messagesSubject.next([]);
  }
}
