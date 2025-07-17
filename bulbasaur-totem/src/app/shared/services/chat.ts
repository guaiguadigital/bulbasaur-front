// shared/services/chat.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Chat {
  private messagesSubject = new BehaviorSubject<string[]>([]);
  messages$ = this.messagesSubject.asObservable();

  addMessage(msg: string) {
    const current = this.messagesSubject.value;
    this.messagesSubject.next([...current, msg]);
  }

  clearMessages() {
    this.messagesSubject.next([]);
  }
}
