import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chat } from '../../services/chat';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-popup',
  imports: [FormsModule],
  templateUrl: './chat-popup.html',
  styleUrl: './chat-popup.css'
})
export class ChatPopup {
  isOpen = false;
  messages: string[] = [];
  newMessage = '';

  @ViewChild('chatInput') chatInput!: ElementRef;

  constructor(private chatService: Chat) {
    this.chatService.messages$.subscribe(msgs => this.messages = msgs);
  }

  open() {
    this.isOpen = true;
    setTimeout(() => this.chatInput.nativeElement.focus(), 0);
  }

  close() {
    this.isOpen = false;
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.chatService.addMessage(this.newMessage);
      this.newMessage = '';
      setTimeout(() => this.scrollToBottom(), 0);
    }
  }

  scrollToBottom() {
    const messagesDiv = document.querySelector('.chat-messages');
    if (messagesDiv) messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }
}