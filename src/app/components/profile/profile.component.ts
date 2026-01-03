import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  profile: any;
  editMode = false;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(data => {
      this.profile = { ...data };
    });
  }

  enableEdit() {
    this.editMode = true;
  }

  cancelEdit() {
    this.editMode = false;
    this.ngOnInit(); // reload mock data
  }

  saveProfile() {
    this.editMode = false;
    console.log('Profile updated (mock): ', this.profile);
    alert('Profil mis à jour (statique)');
  }

  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => (this.profile.avatar = reader.result);
      reader.readAsDataURL(file);
    }
  }

  starsArray(n: number) {
    return Array(n);
  }
}
