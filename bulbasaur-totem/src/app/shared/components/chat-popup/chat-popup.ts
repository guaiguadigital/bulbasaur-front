import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chat, ChatMessage } from '../../services/chat';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-popup',
  imports: [FormsModule, CommonModule],
  templateUrl: './chat-popup.html',
  styleUrl: './chat-popup.css'
})
export class ChatPopup {
  isOpen = false;
  messages: ChatMessage[] = [];
  newMessage = '';
  userName = '';
  userWhatsApp = '';

  @ViewChild('chatInput') chatInput!: ElementRef;

  constructor(private chatService: Chat) {
    this.chatService.messages$.subscribe(msgs => this.messages = msgs);
  }

  open() {
    this.isOpen = true;
    setTimeout(() => this.chatInput.nativeElement.focus(), 0);
    this.addBotMessage('Teu sonho está aqui. Como você chama?');
  }

  close() {
    this.isOpen = false;
  }

  sendMessage() {
    if (!this.newMessage.trim()) return;

    const text = this.newMessage;
    this.addUserMessage(text);

    if (!this.userName) {
      this.userName = text;
      console.log('Nombre del usuario:', this.userName);
      setTimeout(() => this.addBotMessage('Você pode escrever teu WhatsApp?'), 500);
    } else if (!this.userWhatsApp) {
      this.userWhatsApp = text;
      console.log('WhatsApp del usuario:', this.userWhatsApp);
      setTimeout(() => this.addBotMessage('Obrigado! Entraremos em contato.'), 500);
    }

    this.newMessage = '';
    setTimeout(() => this.scrollToBottom(), 0);
  }

  addBotMessage(text: string) {
    this.chatService.addMessage({ text, from: 'bot' });
  }

  addUserMessage(text: string) {
    this.chatService.addMessage({ text, from: 'user' });
  }

  scrollToBottom() {
    const messagesDiv = document.querySelector('.chat-messages');
    if (messagesDiv) messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }
}
