import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http: HttpClient) { }

  createUser(userData: any) {
    return this.http.post<any>('http://localhost:3000/global/createUser', userData);
  }

  checkUserWithPassword(userData: any) {
    return this.http.post<any>('http://localhost:3000/global/checkUserWithPassword', userData);
  }

  getAllEvents() {
    return this.http.get<any[]>('http://localhost:3000/global/getAllEvents');
  }

  getEventsByUserId(userId: number) {
    return this.http.get<any[]>('http://localhost:3000/global/getEventsByUserId/' + userId);
  }

  getUsersByEventId(eventId: number) {
    return this.http.get<any[]>('http://localhost:3000/global/getUsersByEventId/' + eventId);
  }

  getMessagesBetweenUsers(user1Id: number, user2Id: number) {
    return this.http.get<any[]>('http://localhost:3000/global/getMessagesBetweenUsers/' + user1Id + '/' + user2Id);
  }

  sendMessage(senderId: number, receiverId: number, content: string) {
    const messageData = { senderId, receiverId, content };
    return this.http.post<any>('http://localhost:3000/global/sendMessage', messageData);
  }
}
