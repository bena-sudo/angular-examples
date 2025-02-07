import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { SupabaseService } from '../../../../core/services/supabase.service';

@Component({
  selector: 'app-header-auth',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header-auth.component.html',
  styleUrl: './header-auth.component.css',
})
export class HeaderAuthComponent {
  logged: boolean = false;

  constructor(
    private readonly router: Router,
    private readonly supabaseService: SupabaseService,
  ) {}

  ngOnInit(): void {
    this.logged = this.supabaseService.loggedSubject.getValue();
    this.supabaseService.loggedSubject.subscribe(
      (logged) => (this.logged = logged),
    );
    this.supabaseService.isLogged();
  }
}
